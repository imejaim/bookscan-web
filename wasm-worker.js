// wasm-worker.js
// Web Worker for WASM processing

importScripts('https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js');

let pyodide = null;

async function loadPyodideAndPackages() {
  pyodide = await loadPyodide();
  await pyodide.loadPackagesFromImports(`
    import numpy
    from PIL import Image
    import io
    import base64
  `);
  
  // Load the bookscan processing logic
  await pyodide.runPythonAsync(`
    def convert_images_to_pdf(images_b64):
      """
      Base64 인코딩된 이미지 목록을 PDF로 변환
      """
      from PIL import Image
      import io
      import base64
      
      # 이미지 디코딩 및 변환
      images = []
      for img_b64 in images_b64:
        # 데이터 URL 형식에서 base64 부분만 추출
        if img_b64.startswith('data:'):
          img_b64 = img_b64.split(',')[1]
        
        # Base64 디코딩
        img_data = base64.b64decode(img_b64)
        img = Image.open(io.BytesIO(img_data))
        
        # RGB로 변환 (PNG 등의 알파 채널 처리)
        if img.mode != 'RGB':
          img = img.convert('RGB')
        
        images.append(img)
      
      if not images:
        raise ValueError("No images provided")
      
      # PDF로 저장 (메모리에)
      pdf_buffer = io.BytesIO()
      images[0].save(
        pdf_buffer,
        format='PDF',
        save_all=True,
        append_images=images[1:],
        resolution=100.0
      )
      
      # Base64로 인코딩하여 반환
      pdf_bytes = pdf_buffer.getvalue()
      return base64.b64encode(pdf_bytes).decode('utf-8')
  `);
  
  return pyodide;
}

// Initialize Pyodide
let pyodideReadyPromise = loadPyodideAndPackages();

// Handle messages from the main thread
self.onmessage = async function(event) {
  // Make sure Pyodide is loaded
  await pyodideReadyPromise;
  
  const { id, images } = event.data;
  
  try {
    // Convert images to Pyodide-compatible format
    let imageList = pyodide.toPy(images);
    
    // Call Python function
    const result = await pyodide.runPythonAsync(`
      convert_images_to_pdf(${imageList})
    `);
    
    // Send result back to main thread
    self.postMessage({
      id,
      result,
      error: null
    });
  } catch (error) {
    self.postMessage({
      id,
      result: null,
      error: error.message
    });
  }
};

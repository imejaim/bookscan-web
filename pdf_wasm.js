// pdf_wasm.js - Basic WASM integration for image to PDF conversion

// Expose the function to the window object
window.processImages = function(imageList) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('Processing images:', imageList);
      console.log('Image count:', imageList ? imageList.length : 'undefined');
      
      // Check if imageList is valid
      if (!imageList || !Array.isArray(imageList) || imageList.length === 0) {
        console.error('Invalid image list received');
        reject('Invalid image list: empty or not an array');
        return;
      }
      // Convert base64 images to usable format
      const images = [];
      
      for (let i = 0; i < imageList.length; i++) {
        console.log('Loading image', i + 1);
        const img = new Image();
        const loadPromise = new Promise((resolve) => {
          img.onload = () => resolve();
          img.onerror = (e) => {
            console.error('Image load error:', e);
            reject('Image load failed: ' + e);
          };
        });
        
        img.src = imageList[i];
        await loadPromise;
        
        console.log('Image loaded:', img.width, 'x', img.height);
        images.push(img);
      }
      
      // Use PDF.js library to create PDF
      console.log('Creating PDF document');
      const pdfDoc = await PDFLib.PDFDocument.create();
      
      for (let i = 0; i < images.length; i++) {
        console.log('Processing image', i + 1, 'for PDF');
        const img = images[i];
        
        // Create a canvas to draw the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        // Get image data as JPEG
        const jpegDataURL = canvas.toDataURL('image/jpeg', 0.85);
        const jpegBase64 = jpegDataURL.split(',')[1];
        
        // Convert base64 to binary data
        const binaryString = atob(jpegBase64);
        const bytes = new Uint8Array(binaryString.length);
        for (let j = 0; j < binaryString.length; j++) {
          bytes[j] = binaryString.charCodeAt(j);
        }
        
        console.log('Embedding JPEG in PDF, size:', bytes.length, 'bytes');
        const jpegImage = await pdfDoc.embedJpg(bytes);
        
        // Get image dimensions
        const imgDims = jpegImage.size();
        console.log('Image dimensions:', imgDims.width, 'x', imgDims.height);
        
        // Add page with A4 dimensions (portrait or landscape based on image)
        const isPortrait = imgDims.height > imgDims.width;
        const pageWidth = isPortrait ? 595 : 842;
        const pageHeight = isPortrait ? 842 : 595;
        const page = pdfDoc.addPage([pageWidth, pageHeight]);
        
        // Calculate scaling to fit image on page with margins
        const margin = 40;
        const maxWidth = pageWidth - 2 * margin;
        const maxHeight = pageHeight - 2 * margin;
        
        const widthRatio = maxWidth / imgDims.width;
        const heightRatio = maxHeight / imgDims.height;
        const scale = Math.min(widthRatio, heightRatio);
        
        const scaledWidth = imgDims.width * scale;
        const scaledHeight = imgDims.height * scale;
        
        // Center the image on the page
        const x = (pageWidth - scaledWidth) / 2;
        const y = (pageHeight - scaledHeight) / 2;
        
        console.log('Drawing image on page at:', x, y, 'size:', scaledWidth, 'x', scaledHeight);
        page.drawImage(jpegImage, {
          x: x,
          y: y,
          width: scaledWidth,
          height: scaledHeight,
        });
      }
  
  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  
  // Convert to base64 for return to Flutter
  const pdfBase64 = btoa(
    Array.from(new Uint8Array(pdfBytes))
      .map(b => String.fromCharCode(b))
      .join('')
  );
  
      resolve(pdfBase64);
    } catch (error) {
      console.error('Error in WASM processing:', error);
      reject(error.toString());
    }
  });
};

// Log when module is loaded
console.log('PDF WASM module initialized');

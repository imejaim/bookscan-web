// pdf-processor.js
// JavaScript interface for the WASM worker

// Create a single worker
let worker = null;
let nextTaskId = 1;
const tasks = new Map();

// Initialize the worker
function initWorker() {
  if (worker === null) {
    worker = new Worker('wasm-worker.js');
    
    worker.onmessage = (event) => {
      const { id, result, error } = event.data;
      const task = tasks.get(id);
      
      if (task) {
        if (error) {
          task.reject(new Error(error));
        } else {
          task.resolve(result);
        }
        tasks.delete(id);
      }
    };
    
    worker.onerror = (error) => {
      console.error('Worker error:', error);
      // Reject all pending tasks on worker error
      for (const [id, task] of tasks.entries()) {
        task.reject(new Error('Worker error: ' + error.message));
        tasks.delete(id);
      }
    };
  }
}

// Function exposed to Flutter via js.context
window.processImages = function(images) {
  // Initialize worker if needed
  initWorker();
  
  // Create a unique task ID
  const taskId = nextTaskId++;
  
  // Return a promise that will resolve with the PDF data
  return new Promise((resolve, reject) => {
    // Store the callbacks
    tasks.set(taskId, { resolve, reject });
    
    // Send the task to the worker
    worker.postMessage({
      id: taskId,
      images: images
    });
  });
};

// Log when the script is loaded
console.log('PDF Processor initialized');

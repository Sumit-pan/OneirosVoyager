// pdfHelper.ts
// This utility provides functions for handling PDF files in your React TypeScript application

/**
 * Checks if a PDF file exists at the specified path
 * @param path - The path to the PDF file
 * @returns A promise that resolves to a boolean indicating if the file exists
 */
export const checkPdfExists = async (path: string): Promise<boolean> => {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error('Error checking PDF existence:', error);
      return false;
    }
  };
  
  /**
   * Opens a PDF file in a new browser tab
   * @param path - The path to the PDF file
   */
  export const openPdfInNewTab = (path: string): void => {
    window.open(path, '_blank');
  };
  
  /**
   * Triggers download of a PDF file
   * @param path - The path to the PDF file
   * @param filename - The name to save the file as
   */
  export const downloadPdf = (path: string, filename: string): void => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  /**
   * Example function for how to upload a PDF file
   * @param file - The file object from a file input
   * @returns A promise with the upload result
   */
  export const uploadPdfFile = async (file: File): Promise<string> => {
    // This is a placeholder for an actual upload implementation
    // In a real application, you would likely use FormData and fetch to upload to your server
    
    // Example implementation:
    const formData = new FormData();
    formData.append('pdf', file);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/upload-pdf', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload PDF');
      }
      
      const result = await response.json();
      return result.fileUrl; // Assuming your API returns the URL to the uploaded file
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw error;
    }
  };
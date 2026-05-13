/**
 * Yash Portfolio - Centralized API Service
 * Manages communication between Client and Backend
 */

const API_BASE_URL = '/api';

export const chatbotService = {
  /**
   * Send a message to the AI backend
   */
  async sendMessage(message: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) throw new Error('Neural link failure');
      return await response.json();
    } catch (error) {
      console.error('Chatbot API Error:', error);
      throw error;
    }
  }
};

export const contactService = {
  /**
   * Submit contact form to backend
   */
  async submitForm(data: any) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Data transmission failure');
      return await response.json();
    } catch (error) {
      console.error('Contact API Error:', error);
      throw error;
    }
  }
};

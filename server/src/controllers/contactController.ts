import { Request, Response } from 'express';

export const handleContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, type, message } = req.body;
    
    // In a real app, you would send an email or save to DB
    console.log(`Contact Form Submission: ${name} (${email}) - ${type}`);
    console.log(`Message: ${message}`);

    res.status(200).json({ 
      status: 'success', 
      message: 'Transmission received. Verification in progress.' 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Protocol failure during transmission' 
    });
  }
};

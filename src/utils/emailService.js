
/**
 * Send email using the custom backend API (Nodemailer)
 * @param {HTMLFormElement} formElement - The form element to send
 * @returns {Promise} - Resolves with success result or rejects with error
 */
export const sendEmail = async (formElement) => {
    try {
        const formData = new FormData(formElement);
        const data = {
            name: `${formData.get('first_name')} ${formData.get('last_name')}`,
            email: formData.get('user_email'),
            phone: formData.get('user_phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to send email');
        }

        return { success: true, message: result.message };
    } catch (error) {
        console.error('Email Error:', error);
        return { success: false, message: error.message || 'Failed to send email', error };
    }
};

export const initEmail = () => {
    // No-op for backward compatibility
    console.log('Email Service Initialized (Backend Mode)');
};

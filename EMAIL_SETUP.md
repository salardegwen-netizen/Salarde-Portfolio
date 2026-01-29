# Email Integration Setup Guide

Your portfolio now has email integration! Here's how to set it up:

## Prerequisites
- Gmail account
- Access to Gmail App Passwords

## Step 1: Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. In the left menu, click **"App passwords"** (you may need to enable 2FA first)
3. Select **"Mail"** as the app and **"Windows Computer"** as the device
4. Google will generate a 16-character password

## Step 2: Configure Environment Variables

Edit the `.env.local` file in your project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-generated-app-password
```

**Example:**
```env
EMAIL_USER=salardegwen@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

## Step 3: Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to your contact section
3. Fill out the form and submit
4. Check **salardegwen@gmail.com** for the message

## How It Works

- **Contact Form**: Users fill out their name, email, subject, and message
- **API Route** (`/api/contact`): Receives form data and sends emails
- **Your Email**: You receive the message at salardegwen@gmail.com
- **Confirmation Email**: User receives a confirmation that their message was received

## Features

✅ Form validation  
✅ Success/error notifications via toast  
✅ Automatic confirmation email to user  
✅ Loading state on submit button  
✅ Responsive design  

## Troubleshooting

**Issue**: "Failed to send email"
- Verify your Gmail credentials in `.env.local`
- Check if 2FA is enabled on your Gmail account
- Confirm the app password is correct

**Issue**: "All fields are required"
- Ensure all form fields are filled out

**Issue**: Environment variables not loading
- Restart your dev server after updating `.env.local`
- Check file is saved with correct format (EMAIL_USER=value)

## Security Notes

- Never commit `.env.local` to git (add to `.gitignore`)
- Use App Passwords, not your main Gmail password
- Recipient email is hardcoded to salardegwen@gmail.com

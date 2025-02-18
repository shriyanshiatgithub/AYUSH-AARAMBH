export const welcomeTemplate = (name: string) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .content h1 {
            color: #333;
        }

        .content p {
            color: #666;
            line-height: 1.6;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        .footer {
            background-color: #f4f4f4;
            color: #999;
            padding: 10px;
            text-align: center;
            font-size: 12px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <h2>Welcome to Our App!</h2>
        </div>
        <div class="content">
            <h1>Hi ${name},</h1>
            <p>Thank you for signing up for our app! We're excited to have you on board.</p>
        </div>
        <div class="footer">
            <p>If you didn't sign up for this account, you can safely ignore this email.</p>
            <p>&copy; 2024 Ayush. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`};
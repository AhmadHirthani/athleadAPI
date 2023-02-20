function getHomePage(req, res) {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
          }
          .header {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .message {
            font-size: 18px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">Welcome to Athlead API</div>
        <div class="message">Feel free to contact me at hertani86@gmail.com for any inquiries.</div>
      </body>
    </html>
  `);
}

module.exports = { getHomePage };

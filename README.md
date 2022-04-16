# Telegram Web Apps for Bots test

Example HTML-file that contains a basic interaction with Telegram Web Apps API. Inspired by [Attach Bot](https://t.me/asmico_attach_bot).

## Links
* Official docs: https://core.telegram.org/bots/webapps
* Live Demo Bot: [Attach Bot](https://t.me/asmico_attach_bot)
* Telegram Promo Bot: [Durger King](https://t.me/durgerkingbot)

# Quick setup

1. Bot should send a button with the data that contains field `web_app` with a URL to index of a Web App:
    ```json
    {
        "text": "Test web_app",
        "web_app": {
            "url": "https://example.com/telegram-web-app/index.html"
        }
    }
    ```

2. To connect a Web App to the Telegram client, place the script `telegram-web-app.js` in the `<head>` tag before any other scripts, using this code ([more info](https://core.telegram.org/bots/webapps#initializing-web-apps)):
    ```html
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    ```

3. Do the thing.

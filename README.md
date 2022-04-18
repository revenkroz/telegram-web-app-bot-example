# Telegram Web Apps for Bots test

Example HTML-file that contains a basic interaction with Telegram Web Apps API. Based on [Attach Bot](https://t.me/asmico_attach_bot).

## Links
* Official docs: https://core.telegram.org/bots/webapps
* Live Demo Bot: [Attach Bot](https://t.me/asmico_attach_bot)
* Telegram Promo Bot: [Durger King](https://t.me/durgerkingbot)
* My Telegram WebApp to track movies and TV shows: [EPSCAPE Bot](https://t.me/EpscapeBot)

## Quick setup

#### 1. Show the user a button to open a Web App. There are two ways:

1. Show the user a special menu button (near the message input field):
    1. Go to [Bot Father](https://t.me/BotFather)
    2. Select your bot
    3. `Bot Settings` — `Menu Button` — `Specify..`/`Edit menu button URL`
    4. Send a URL to your Web App (e.g. `https://example.com/telegram-web-app/index.html`)

2. The second way is to send a button with the data that contains field `web_app` with a URL to a Web App:
    ```json
    {
        "text": "Test web_app",
        "web_app": {
            "url": "https://example.com/telegram-web-app/index.html"
        }
    }
    ```

#### 2. Add script to your Web App

To connect a Web App to the Telegram client, place the script `telegram-web-app.js` in the `<head>` tag before any other scripts, using this code ([more info](https://core.telegram.org/bots/webapps#initializing-web-apps)):
```html
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

Once the script is connected, a `window.Telegram.WebApp` object will become available.

#### 3. Do the thing.

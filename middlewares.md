
### express's static middleware
Common for web applications to need to send static files over the wire.
These include things like images or CSS or HTML -- Content that isn't dynamic.

### Middlewares to explore
connect-ratelimit: throttle connections to a certain number of requests per hour.
Helmet : add http headers to make your app safer againt certain kind of attacks.
cookie-parser: parses browser cookies
response-time: sends the X-Response-Time header so you can debug the performance of your application.
morgan: useful logger
connect: much like express, but only does middleware (it is a sort of alternative for express middleware)
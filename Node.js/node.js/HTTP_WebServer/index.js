const http = require( "http" );
const host = "localhost";
const port = 8000;
//write head sets the http status code of the response.HTTP status codes indicate how well an HTTP request was handled by the server.
const requestListener = function ( req, res ) {
  res.writeHead( 200 );
  res.end( "My First server" );
}
const server = http.createServer( requestListener );
server.listen( port, host, () => {
  console.log( `Server is running on http://${host}:${port}` );
} );
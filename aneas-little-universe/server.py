"""
Fast, Multi-Threaded HTTP Server for Anea's Little Universe
Ensures instant loading, zero socket blocking, and proper CORS/MIME handling.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import sys
import os

class UniverseHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent aggressive caching during development and ensure instant response
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def log_message(self, format, *args):
        # Clean logging
        sys.stdout.write(f"[{self.log_date_time_string()}] {format % args}\n")
        sys.stdout.flush()

def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = 8080
    server_address = ("", port)
    
    # ThreadingHTTPServer handles concurrent browser connections without hanging
    httpd = ThreadingHTTPServer(server_address, UniverseHandler)
    print(f"ANEA'S LITTLE UNIVERSE server running smoothly on http://localhost:{port}")
    sys.stdout.flush()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()

if __name__ == "__main__":
    run()

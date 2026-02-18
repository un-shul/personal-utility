from http.server import BaseHTTPRequestHandler
import datetime
import urllib.parse

b_values = ["GANESHAY", "SHIVAY", "NARAYANA", "SARASWATI MATA", "LAXMI MATA", "HANUMAN JI"]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Parse the date from the URL query string
        query = urllib.parse.urlparse(self.path).query
        params = urllib.parse.parse_qs(query)
        date_input = params.get('date', [datetime.datetime.now().strftime("%Y-%m-%d")])[0]

        try:
            date = datetime.datetime.strptime(date_input, "%Y-%m-%d")
            delta_days = (date - datetime.datetime(2021, 11, 27)).days
            cycle_num = delta_days // 18
            b_value = b_values[(delta_days % 18) // 3]
            result = f"{b_value} (Cycle {cycle_num + 1})"
        except Exception as e:
            result = f"Error: {str(e)}"

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(f'{{"result": "{result}"}}'.encode('utf-8'))
        return
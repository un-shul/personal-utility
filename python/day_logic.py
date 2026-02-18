import sys
import datetime

# Define the B values for each set of three days 
b_values = ["GANESHAY", "SHIVAY", "NARAYANA", "SARASWATI MATA", "LAXMI MATA", "HANUMAN JI"] 

def get_b_value(date_str):
    try:
        # Convert the input string to a datetime object 
        date = datetime.datetime.strptime(date_str, "%Y-%m-%d") 
        
        # Calculate the number of days between the start date and the input date 
        delta_days = (date - datetime.datetime(2021, 11, 27)).days 
        
        # Calculate the cycle number (each cycle is 18 days) 
        cycle_num = delta_days // 18 
        
        # Calculate the B value 
        b_value = b_values[(delta_days % 18) // 3] 
        
        return f"{b_value} (Cycle {cycle_num + 1})"
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    # Get the date passed from Next.js (sys.argv[1])
    # If no date passed, default to today
    target_date = sys.argv[1] if len(sys.argv) > 1 else datetime.datetime.now().strftime("%Y-%m-%d")
    print(get_b_value(target_date))
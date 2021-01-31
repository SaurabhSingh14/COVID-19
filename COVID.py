import requests
from flask import Flask, render_template, request


# url = "https://corona-virus-world-and-india-data.p.rapidapi.com/api"
# headers = {
#         'x-rapidapi-key': "41a31b52c5mshff8c53035011ea2p154c41jsnf1d5045be509",
#         'x-rapidapi-host': "corona-virus-world-and-india-data.p.rapidapi.com"
#         }
# response = requests.request("GET", url, headers=headers)
# data = response.json()
#
# lst_cases = []
#
# for i in range(5):
#     lst_cases.append(int(data['countries_stat'][i]['cases'].replace(',', '')))
#
# other = int(data['world_total']['total_cases'].replace(',', ''))-sum(lst_cases)
# print(int(data['world_total']['total_cases'].replace(',', '')),sum(lst_cases),other)

# client = pymongo.MongoClient('mongodb://127.0.0.1:27017/')
# mydb1 = client['Contacts']
# mydb2 = client['Feedback']
# c_info = mydb1.contactsdetails
# f_info = mydb2.feedbackdetails

lst_cases = []
lst_country = []
a_cases = []
deaths_ = []
recovered_ = []
new_cases = []

app = Flask(__name__)
app.config['DEBUG'] = True


@app.route('/', methods=['GET', 'POST'])
def home():

    if request.method == 'POST':
        fname = request.form.get('_fname')
        lname = request.form.get('_lname')
        age = request.form.get('_age')
        email = request.form.get('_email')
        state = request.form.get('_state')
        country = request.form.get('_country')

        c_details={
            'First name': fname,
            'Last name': lname,
            'Age': age,
            'E-mail': email,
            'State': state,
            'Country': country
        }
        # c_info.insert_one(c_details)

    url = "https://corona-virus-world-and-india-data.p.rapidapi.com/api"
    headers = {
        'x-rapidapi-key': "41a31b52c5mshff8c53035011ea2p154c41jsnf1d5045be509",
        'x-rapidapi-host': "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    response = requests.request("GET", url, headers=headers)
    data = response.json()

    for i in range(5):
        lst_cases.append(int(data['countries_stat'][i]['cases'].replace(',', '')))
        lst_country.append(data['countries_stat'][i]['country_name'])

    for i in range(5):
        a_cases.append(int(data['countries_stat'][i]['active_cases'].replace(',', '')))
        deaths_.append(int(data['countries_stat'][i]['deaths'].replace(',', '')))
        recovered_.append(int(data['countries_stat'][i]['total_recovered'].replace(',', '')))
        new_cases.append(int(data['countries_stat'][i]['new_cases'].replace(',', '')))

    total = data['world_total']['total_cases']
    recovered = data['world_total']['total_recovered']
    deaths = data['world_total']['total_deaths']
    update = data['statistic_taken_at']

    return render_template('index.html', total_cases=total, recovered_cases=recovered, total_deaths=deaths,
                           caseval=lst_cases, ctyval=lst_country, acval=a_cases, dpcval=deaths_, rpcval=recovered_,
                           ncval=new_cases, last_update=update)


@app.route('/about', methods=['GET', 'POST'])
def about():
    if request.method=='POST':
        email = request.form.get('_email')
        msg = request.form.get('_msg')

        f_details={
            'Email': email,
            'Message': msg
        }
        # f_info.insert_one(f_details)

    return render_template('aboutus.html')


# @app.route('/data')
# def data_fun():
#     site_root = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(site_root, "static", "data.json")
#     data = json.load(open(json_url))
#     return data

if __name__ == '__main__':
    app.run()

This boilerplate is for using gunicorn with nginx

copy local_template.py and rename it as local.py in src/core/settings folder

make a virtualenv: virtualenv --python=python3 env
activate virtual environment: source env/bin/activate
install requirements: pip install -r requirements.txt

Install Gunicorn first
sudo apt-get install gunicorn

running gunicorn
gunicorn wsgi:application --workers {number of cores*2 + 1}

copy the file djnginx.nginxconf to /etc/nginx/sites-available
creating a link to sites-enabled flder: sudo ln -s /etc/nginx/sites-available/djnginx.nginxconf /etc/nginx/sites-enabled/djnginx.nginxconf

Reload nginx
sudo service nginx reload

goto file /etc/hosts and add line: 127.0.0.1 Gunicorn.com

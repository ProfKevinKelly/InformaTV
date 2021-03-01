git:
	git add *
	git commit -m "$m"
	git push
execute:
	pwd;\
	cd front_end;\
	pwd;\
	npm install;
	pwd;
	cd back_end;\
	npm install;\
	npm run dev;
	
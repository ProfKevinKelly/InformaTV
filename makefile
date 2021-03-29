git:
	git add *
	git commit -m "$m"
	git push
execute:
	cd front_end;\
	npm install;
	cd back_end;\
	npm install;\
	npm run dev;
	
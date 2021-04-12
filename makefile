git:
	git add *
	git commit -m "$m"
	git push
execute:
	cd front_end;\
	npm i;
	cd back_end;\
	npm i;\
	npm run dev;
run:
	cd back_end;\
	npm run dev;
	
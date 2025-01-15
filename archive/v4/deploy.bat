cd page
call npm run deploy

cd ..

call git add --all
call git commit -m %1
call git push

all_4__PF: exec2 exec01 exec02 clean
clean:
	rm -f a.out
exec01: exo1.js
	node exo1.js
exec02: 
	node 'exo1(copy).js'
exec2: exo1.c
	gcc exo1.c && ./a.out
#!/bin/zsh

sprintN="Sprint$1"
taskdir="$2"
echo "Created task $sprintN(*˘︶˘*).｡.:*: ./t$taskdir"
say "$sprint инициализирован"

mkdir "$sprintN"

declare -i countFolder

for (( countFolder = 0; countFolder <= taskdir;  countFolder++ ))
do
	cd ./$sprintN
	mkdir t"$countFolder"
done

for (( countFolder = 0; countFolder <= taskdir; countFolder++ ))
do


	cd ./t$taskdir

	index="index.html"
	touch "$index"
	cat > $index <<- EOM
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<title>$1.Task name goes here</title>
			<link rel="stylesheet" href="./css/style.css"></link>
			</head>
			<body>
				<h1>Task name goes here</h1>
				<script src="./js/script.js"></script>
			</body>
		</html>
		EOM
		mkdir "css"
		style="./css/style.css"
		touch "./css/style.css"
		cat > $style <<- EOM
		* {
			margin: 0;
		}
		EOM
		mkdir "js"
		touch "./js/script.js"
	cd ..
done




touch ".gitignore"
cat > ".gitignore" <<- EOM
# Prerequisites
*.d

# Object files
*.o
*.ko
*.obj
*.elf

# Linker output
*.ilk
*.map
*.exp

# Precompiled Headers
*.gch
*.pch

# Libraries
*.lib
*.a
*.la
*.lo

# Shared objects (inc. Windows DLLs)
*.dll
*.so
*.so.*
*.dylib

# Executables
*.exe
*.out
*.app
*.i*86
*.x86_64
*.hex

# Debug files
*.dSYM/
*.su
*.idb
*.pdb

# Kernel Module Compile Results
*.mod*
*.cmd
.tmp_versions/
modules.order
Module.symvers
Mkfile.old
dkms.conf


test
.DS_Store
._.DS_Store
EOM

	mv t0 t00
	mv t1 t01
	mv t2 t02
	mv t3 t03
	mv t4 t04
	mv t5 t05
	mv t6 t06
	mv t7 t07
	mv t8 t08
	mv t9 t09

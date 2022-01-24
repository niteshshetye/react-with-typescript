TYPESCRIPT COMMANDS

@notes: Typescript can't run in the browser directly
        so we need to first convert the typescript into
        the javascript that why we need the complier
    
# COMMAND TO COMPLIE THE TYPESCRIPT FILE
-> tsc <filename>

# COMMAND TO WATCH ( TRACK ) THE CHANGE IN THE TYPESCRIPT FILE
-> tsc --watch <filename>

# COMMAND TO CREATE THE CONFIG FILE (tsconfig.json)
-> tsc --init

### tsconfig file 

This file contained some important stuffs like after compliation in which
js version it would complied that meanse in es5 or es6 or less or we also can decide 
a specific format

and many more things just go through from it

# Now after creating the file tsconfig file 
there is something called rootDir and outDir 
set rootDir where your all typescript file will be present
set outDir where all js file create after the compiation will complete
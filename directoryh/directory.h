/**
 *  Directory library, Version 1.1, October 6, 2017
 *  Written by:
 *      Andrew Leader <seungminleader@gmail.com>
 *
 *  flamingthanatos.github.io
 *
 *	License: MIT License
 *
 *  This library is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
**/

#include <stdio.h>                          // defines FILENAME_MAX

#ifdef WINDOWS
    #include <direct.h>
    #define GetCurrentDir _getcwd
#else
    #include <unistd.h>
    #define GetCurrentDir getcwd
#endif

char masterPath[FILENAME_MAX];

class WorkingDir{
    private:
        char* chMasterPath;
    public:
        char* getDir(){
             if(!GetCurrentDir(masterPath, sizeof(masterPath))){
                 std::cout << errno;
             }
            chMasterPath = masterPath;
            return chMasterPath;
        }
}; WorkingDir dir;
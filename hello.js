#!/usr/bin/env node

class Host {
    constructor() {
        this.path = '/var/www/';
        this.name = name;
        this.host = this.path + this.name;
    }

    createHost() {
        // exec('...', (error, stdout, stderr) => {
        //     console.log(stdout);
        //     console.log(stderr);
        //     if (error !== null) {
        //         console.log('exec error: ' + error);
        //     }
        // });

        try {
            if (fs.mkdirSync(this.name), (err) => { if (!err) return true; })
                console.log('Папка ' + this.name + ' создана.');

            
        } catch(err) {
            if (err.code === 'EEXIST')
                console.error('Ошибка. Файл ' + this.name + ' существует.');
            
            process.exit();
        }

        

        console.log('Сервер ' + this.name + ' создан.');
    }
    
    removeHost() {
        fs.rmdirSync(this.name, (err) => {
            if (err) throw err;
        });
        console.log('Сервер ' + this.name + ' удалён.');
    }
}

let nodePath    = process.argv[0],
    scriptPath  = process.argv[1],
    task        = process.argv[2],
    name        = process.argv[3],
    host        = new Host(),
    fs          = require('fs'),
    exec        = require('child_process').exec;

if (!task || !name) {
    console.error('Данные не полные!');
    process.exit();
}

switch (task) {
    case 'create':
        host.createHost(name);
        break;
    case 'remove':
        host.removeHost(name);
        break;

    default:
        console.error('Неизвестная команда!');
        process.exit();
}



//console.log('Задача: ' + task + '; название: ' + name);
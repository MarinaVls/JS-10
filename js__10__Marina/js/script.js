let br = '<br/>';

let Kettle = function(power, volume, water) {

    this.get = function() {
        this.power = power || +prompt('Введите мощность чайника в Вт');
        this.volume = volume || +prompt('Введите объем чайника в литрах');
        this.water = water || +prompt('Введите количество необходимой воды для нагрева в литрах');
        
        if(this.water <= this.volume) {
            this.work = prompt('Чайник вкл. или выкл. ?');
        }
        
        this.operation();
    };

    this.operation = function() {
        switch (this.work) {
            case 'вкл':
                this.time = ((this.water * 4200 * (100 - 7)) / this.power) / 60 ;
            break;
            case 'выкл':
                this.time = alert('Чаник выключен. Нагрев не возможен.');
            break;
        default: alert('Ввели неверную команду!');
        }
        this.price();
    };
    
    this.price = function() {
        if (this.time >= 0) {
                this.heat = (0.1778 * (this.power * (this.time / 60))) / 1000 ;
        }

        this.show();
    }

    this.show = function() {
        if (this.water <= this.volume) {
            if(this.work != 'выкл' ) {
                document.write('Мощность чайника: ' + this.power + ' Вт' + ';' + br + 
                    'Объем чайника: ' + this.volume + ' л.' + ';' + br +  
                    'Количество воды для нагрева: ' + this.water + ' л.' + ';' + br + 
                    'Действие чайника: ' + this.work + ';' + br + 
                    'Время нагрева: ' + this.time + ' мин.' + ';' + br + 
                    'Стоимость нагрева воды: ' + this.heat + ' руб.' + ';');}
        }else {
            alert('Нагрев не возможен, большое количество воды');
        }
        }; 
};


let Teapot = function(power, volume, water) {
    Kettle.apply(this, arguments);
}


let teapot = new Teapot(2000, 2, 2);
teapot.get();



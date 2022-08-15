class Professional {

    //////////////////////////////////////
    //            CONSTRUCTOR           //
    //////////////////////////////////////

    constructor(name, age, genre, weight,height ,eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    //////////////////////////////////////
    //         METODOS DE CLASE         //
    //////////////////////////////////////

    print() {
        for (let prop in this) {
            if (prop != "print") {
                console.log(`${prop} - ${eval("this." + prop)}`);
            }
        }
        console.log('');
    }
}
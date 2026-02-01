function validateBuild(intake, exhaust, turbo, injectors, fuelPump){
    let undersizedInjectors = false;
    let oversizedInjectors = false;
    let undersizedFuelPump = false;
    let oversizedFuelPump = false;
    let restrictedExhaust = false;
    let restrictedIntake = false;

    if(turbo.flow < 40) {
        if(injectors.cc > 750) {
            oversizedInjectors = true;
        }

        if(fuelPump.lph > 190) {
            oversizedFuelPump = true;
        }
    }

    if(turbo.flow >= 40 && turbo.flow <= 50){
        if(injectors.cc <= 550) {
            undersizedInjectors = true;
        }
        if(injectors.cc > 1050) {
            oversizedInjectors = true;
        }

        if(fuelPump.lph < 190) {
            undersizedFuelPump = true;
        }

        if(fuelPump.lph > 255) {
            oversizedFuelPump = true;
        }

        if(intake.size < 3) {
            restrictedIntake = true;
        }

        if(exhaust.size < 2.5) {
            restrictedExhaust = true;
        }
    }

    if(turbo.flow > 50) {
        if(intake.size < 3) {
            restrictedIntake = true;
        }

        if(exhaust.size < 3) {
            restrictedExhaust = true;
        }

        if(injectors.cc < 1050) {
            undersizedInjectors = true;
        }

        if(fuelPump.lph < 255) {
            undersizedFuelPump = true;
        }
    }
    
    return {
        undersizedFuelPump, 
        oversizedFuelPump, 
        undersizedInjectors, 
        oversizedInjectors, 
        restrictedExhaust, 
        restrictedIntake
    }
}

export default validateBuild

/* 
if the turbocharger is anything after the 16g in the list, the intake, injectors, and fuel pump 
need to be changed 

the injectors should not require that other things be upgraded, only warn that they may be
unnecessary

the turbo SHOULD require the injectors be changed if they are too out of spec for the airlfow

the fuel pump should be requried to change if the injectors outflow it

the intake and exhaust should not be required to change, only recommended for optimal performance

if turbo flow is 40-50, injector.cc should be 550-1050; if turbo.flow is 50+, injector.cc needs to be
1050+; if turbo.flow is less < 40, injector.cc shouldnt be over 750. 

*/

/*
 Given { intakeId, exhaustId, turboId, injectorsId, fuelPumpId }, i need to produce { intake: {size: x},
 exhaust: {size: x}, etc}.

 I need to search the parts object for an id that matches and somehow extract the value that the function
 needs. each value will come from the respective object in the parts list, and i will have to extract that
 value. If i use the wrong value of either side of the contract it could return undefined. I want to handle
cases for all of the above. 
*/ 
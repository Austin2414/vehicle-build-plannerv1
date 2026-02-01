const intakeSelect = document.getElementById('intakeId');
const exhaustSelect = document.getElementById('exhaustId');
const turboSelect = document.getElementById('turboId');
const injectorsSelect = document.getElementById('injectorsId');
const fuelPumpSelect = document.getElementById('fuelPumpId')

const resultsDiv = document.getElementById('results')
const messageDiv = document.getElementById('message')
const validateButton = document.querySelector('.validate')

validateButton.addEventListener('click', () => {
    messageDiv.textContent = '';
    resultsDiv.textContent ='';

    const intakeId = intakeSelect.value;
    const exhaustId = exhaustSelect.value;
    const turboId = turboSelect.value;
    const injectorsId = injectorsSelect.value;
    const fuelPumpId = fuelPumpSelect.value;

    if (!intakeId) {
        messageDiv.textContent = 'Please select an intake.';
        return;
    }
    if (!exhaustId) {
        messageDiv.textContent = 'Please select an exhaust.';
        return;
    }
    if (!turboId) {
        messageDiv.textContent = 'Please select a turbocharger.';
        return;
    }
    if (!injectorsId) {
        messageDiv.textContent = 'Please select injectors.';
        return;
    }
    if (!fuelPumpId) {
        messageDiv.textContent = 'Please select a fuel pump.';
        return;
    }

    const build = {
        intakeId,
        exhaustId,
        turboId,
        injectorsId,
        fuelPumpId
    }

    fetch('http://localhost:3000/validateBuild', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(build)
    }) 
    .then(res => res.json())
    .then(data => {
        const results = []
        
        if (data.restrictedIntake) {
            results.push({
                message: 'The selected intake is too small for your setup. This could lead to reduced airflow.',
                severity: 'warning',
            });
        }

        if (data.restrictedExhaust) {
            results.push({
                message: 'The selected exhaust is too small for your setup. This could lead to excessive backpressure.',
                severity: 'warning',
            });
        }

        if (data.undersizedInjectors) {
            results.push({
                message: 'The selected injectors are too small for your turbo. This could result in your car running lean.',
                severity: 'error',
            });
        }

        if (data.oversizedInjectors) {
            results.push({
                message: 'The selected injectors are too large. This could lead to difficulty tuning.',
                severity: 'warning',
            });
        }

        if (data.undersizedFuelPump) {
            results.push({
                message: 'The selected fuel pump is too small. Upgrade your fuel pump to support the turbo.',
                severity: 'error',
            });
        }

        if (data.oversizedFuelPump) {
            results.push({
                message: 'The selected fuel pump is too large. This could lead to excessive fuel pressure (disregard if you are running E85).',
                severity: 'warning',
            });
        }

        let overallSeverity = 'ok';

        if (results.some(r => r.severity === 'error')) {
            overallSeverity = 'error'
        }
        else if (results.some(r => r.severity === 'warning')) {
            overallSeverity = 'warning'
        }

        if (results.length === 0) {
            resultsDiv.textContent = 'No compatibility issues were detected with your setup. Your build looks good!';
            resultsDiv.dataset.severity = 'ok';
            return;
        }
        
        results.forEach(item => {
            const newElement = document.createElement('p');
            newElement.textContent = item.message
            resultsDiv.appendChild(newElement)
        })
        resultsDiv.dataset.severity = overallSeverity
    })
    .catch(err => {
        messageDiv.textContent = 'Server error. Please try again later.'
    })
})
import {delay} from 'rxjs/operators';

describe('should visit page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/add');
  });

  it('should fill form in proper way and add sight', () => {
    cy.get(`input[formControlName=name]`).type('Test');
    cy.get(`input[formControlName=country_name]`).type('Poland', delay(200));
    cy.get(`input[formControlName=description]`).type('Poland description', delay(200));
    cy.get(`input[formControlName=iata_code]`).type('PL', delay(200));
    cy.get(`input[formControlName=longitude]`).clear();
    cy.get(`input[formControlName=longitude]`).type(52.09843, delay(200));
    cy.get(`input[formControlName=latitude]`).clear();
    cy.get(`input[formControlName=latitude]`).type(12.0984, delay(200));
    cy.get(`select[formControlName="color"]`).select('#54CCE2', delay(500));
    cy.get(`button`).click();
    cy.wait(2000);
    cy.visit('http://localhost:4200/sights-list');
    cy.contains('Test');
  });

  it('should fill form in invalid inputs', () => {
    cy.get(`input[formControlName=name]`).type('Test');
    cy.get(`input[formControlName=country_name]`).type('Poland', delay(200));
    cy.get(`input[formControlName=description]`).type('ubblnsmoumcwknixgrmuuuoxoqmbywnsluqnimrugsyhfehk' +
      'ojpjkyjvwlbvrgywjumzfdtxurrvsyzbudjckwlqrbplvdwhedeeyyafveknhvbozocgkwrtbzunavy' +
      'oqozpxdhzjtdozbbkaxpewcdiblnoowhycotzllfolvepdgobkqnuhqnlbxdnecwvrelqumjplwulbhlnwech' +
      'dallkyyogyazlphpwjjfruslibholhaqzvfmanvebwjggipwnquadnjhbkfcoefxqliekblsqr', delay(2));
    cy.wait(500);
    cy.get(`input[formControlName=iata_code]`).type('PL', delay(200));
    cy.get(`input[formControlName=iata_code]`).clear();
    cy.get(`input[formControlName=longitude]`).clear();
    cy.get(`input[formControlName=longitude]`).type(2052.09843, delay(200));
    cy.wait(500);
    cy.get(`input[formControlName=latitude]`).clear();
    cy.get(`input[formControlName=latitude]`).type(12.0984, delay(200));
    cy.wait(500);
    cy.contains('description have to be short than 256 characters');
    cy.contains('invalid coordinate format');
    cy.contains('iata_code is required');
  });
});

import { expect, fixture } from "@open-wc/testing";
import { Utils } from "./service/utils";
import { html } from "lit";
import { MyTester } from "./my-tester";

describe("curso", () => {
    it("Mi primera prueba", () => {
        expect(true).equal(true);
    })

    it('Test function sum', () => {
        const utils_service = new Utils();

        const result: number = utils_service.sum(10, 5);

        expect(result).equal(15);

        const result_2: number = utils_service.sum(10, 10);

        expect(result_2).equal(20);
    })

    it('Test functions with other type', () => {
        let other_type: any = "Hola";

        const utils_service = new Utils();

        const result = utils_service.sum(other_type, 20);

        expect(result).equal(0);

        const result_2 = utils_service.sum(20, other_type);

        expect(result_2).equal(0);
    });

    it('Test function restar', () => {
        const utils_service = new Utils();

        const result: number = utils_service.resta(10, 20);

        expect(result).equal(10);
    })

    it("Test function should throw exception", () => {
        const utils_service = new Utils();
        expect(() => utils_service.resta(-10, 20)).to.throw("Esto es una excepción");

        try {
            utils_service.resta(-20, 10);
        } catch (error: any) {
            expect(error.message).equal("Esto es una excepción")
        }
    })

    it('can semantically compare lightDom trees', async () => {
        let element: MyTester = await fixture(html`<my-tester></my-tester>`);
        expect(element).to.be.instanceOf(MyTester);
        expect(element).shadowDom.equal("<p>Hola</p>");
    });

    it("Fizzbuzz function test", () => {
        let utilsService = new Utils();
        let result = utilsService.fizzBuzz(15);
        let expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'];
        expect(result).to.eql(expected);
    });

    it("Fizzbuzz function test", () => {
        let utilsService = new Utils();
        let result = utilsService.fizzBuzz(15);
        expect(result[14]).equal('FizzBuzz')
        expect(result[2]).equal('Fizz');
        expect(result[4]).equal('Buzz');
    });

    it("Fizzbuzz type test", () => {
        let utils_service = new Utils();
        let n: any = 'Hola';
        try {
            utils_service.fizzBuzz(n);
        } catch (error: any) {
            expect(error.message).equal("No es un número");
        }
    });

    it("Fizzbuzz positive test", () => {
        let utils_service = new Utils();
        let n: number = -1;
        try {
            utils_service.fizzBuzz(n);
        } catch (error: any) {
            expect(error.message).equal("n es negativo");
        }
    });
});
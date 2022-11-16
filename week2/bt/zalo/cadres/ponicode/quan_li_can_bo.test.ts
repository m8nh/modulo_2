import rewire from "rewire"
const quan_li_can_bo = rewire("../quan_li_can_bo")
const Cadres = quan_li_can_bo.__get__("Cadres")

// @ponicode
describe("Cadres.getName", () => {
    let inst2: any

    beforeEach(() => {
        inst2 = new Cadres("", Infinity, "", "")
    })

    test("0", () => {
        let result: any = inst2.getName()
        expect(result).toMatchSnapshot()
    })
})

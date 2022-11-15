import * as _2d_3d from "../2d_3d"

// @ponicode
describe("_2d_3d.Point2D.setXY", () => {
    let inst10: any
    let inst9: any
    let inst8: any
    let inst7: any
    let inst6: any
    let inst5: any
    let inst4: any
    let inst3: any
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst10 = new _2d_3d.Point2D(-Infinity, -Infinity)
        inst9 = new _2d_3d.Point2D(Infinity, Infinity)
        inst8 = new _2d_3d.Point2D(NaN, NaN)
        inst7 = new _2d_3d.Point2D(10, 1000)
        inst6 = new _2d_3d.Point2D(1000, 1000)
        inst5 = new _2d_3d.Point2D(10, 10)
        inst4 = new _2d_3d.Point2D(1000, 1000)
        inst3 = new _2d_3d.Point2D(10, 1)
        inst = new _2d_3d.Point2D(1000, 10)
        inst2 = new _2d_3d.Point2D(1, 1000)
    })

    test("0", () => {
        let result: any = inst2.setXY(70, 380)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setXY(380, 320)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.setXY(380, 30)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.setXY(90, 90)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.setXY(350, 550)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst8.setXY(NaN, NaN)
        expect(result).toMatchSnapshot()
    })
})

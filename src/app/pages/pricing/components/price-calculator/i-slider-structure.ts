import { IRangeTick } from "src/app/modules/user-interface/range/i-range-tick";

export interface ISliderDataStructure {
    pupilNumber: SliderData,
    sessionLength: SliderData,
    sessionNumber: SliderData
}

interface SliderData {
    label: string;
    value: string;
    ticks: IRangeTick[]
}
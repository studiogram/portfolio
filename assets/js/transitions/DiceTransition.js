import { Transition } from "@unseenco/taxi";

export default class DiceTransition extends Transition {
    onLeave({ done }) {
        done();
    }

    onEnter({ done }) {
        done();
    }
}

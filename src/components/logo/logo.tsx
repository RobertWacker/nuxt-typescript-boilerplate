import Vue, { VNode } from 'vue';
import { Component } from 'nuxt-property-decorator';
import './logo.scss';

@Component({})
export default class example extends Vue {
    private string = 'This is TSX with SCSS styles';

    render(): VNode {
        return (
            <div class="logo">
                { this.string }
            </div>
        )
    }
}


import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist';
import moment from 'moment';
import { VueMaskDirective } from 'v-mask';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {

        const vMaskV2 = VueMaskDirective;

        const vMaskV3 = {
            beforeMount: vMaskV2.bind,
            updated: vMaskV2.componentUpdated,
            unmounted: vMaskV2.unbind
        };

        const app =  createApp({ render: () => h(App, props) })
            .use(plugin)
            .directive('mask', vMaskV3)
            .use(ZiggyVue)

        app.config.globalProperties.$filters = {
            diffDate(value) {
                let diff = 0
                diff = moment().diff(moment(String(value)), 'days');
                if(diff !== 0)
                {
                    return diff + 'days'
                }
                diff = moment().diff(moment(String(value)), 'hours');
                return diff + ' hours'
            },
            formatDate(value) {
                if(!value || value == '' || value == '0000-00-00')
                    return  '';

                return moment(String(value)).format('YYYY-MM-DD');
            },
            formatDateTime(value) {
                if(!value || value == '' || value == '0000-00-00' || value == '0000-00-00 00:00:00')
                    return  '';

                return moment(String(value)).format('YYYY-MM-DD hh:mm:ss');
            },
            formatPrice(value, digit = 0) {
                if(!value) return 0;
                let val = (value/1).toFixed(digit)
                return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            formatNumber(value) {
                if(!value) return 0;
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            ucfirst(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

        }
        return app.mount(el)
    },
    progress: {
        color: '#3DB049',
    },
});

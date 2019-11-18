import Main from './components/Main.vue';
import Preview from './components/Preview.vue';
import SelectColors from './components/SelectColors.vue';
import SelectFont from './components/SelectFont.vue';
import SelectInputType from './components/SelectInputType.vue';
import InsertInputHeadline from './components/InsertInputHeadline.vue';

export const routes = [
	{
		name: 'Main',
		path: '/main',
		component: Main
	},
	{
		name: 'Preview',
		path: '/preview',
		component: Preview
	},
	{
		name: 'SelectColors',
		path: '/select-colors',
		component: SelectColors
    },
    {
		name: 'SelectFont',
		path: '/select-font',
		component: SelectFont
    },
    {
		name: 'SelectInputType',
		path: '/select-input-type',
		component: SelectInputType
    },
    {
		name: 'InsertInputHeadline',
		path: '/insert-input-headline',
		component: InsertInputHeadline
    },
    {
		path: '*',
		redirect: '/main'
	},
];

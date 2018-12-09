// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items:[
					
				]
			},
			aside: {
				self: {},
				items: [
					{
						title: 'Dashboard & Setup',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-7',
						submenu: [
							{
								title: 'Dashboard',
								bullet: 'dot',
								page: '/'
							},
							{
								title: 'Getting Started',
								bullet: 'dot',
								page: '/getstart',
							},
							{
								title: 'Store Information',
								bullet: 'dot',
								page: '/store',
							},
							{
								title: 'Select Template',
								bullet: 'dot',
							},
							{
								title: 'Checkout Options',
								bullet: 'dot',
							},
							{
								title: 'Call for Actions',
								bullet: 'dot',
							},
							{
								title: 'Category Management',
								bullet: 'dot',
								page :'/categories'
							},
							{
								title: 'Add New Product',
								bullet: 'dot',
								page:'/addnewproduct'								
							},
							{
								title: 'Locations',
								bullet: 'dot',								
							},
							{
								title: 'Design Home Page',
								bullet: 'dot',								
							},
							{
								title: 'Shipping Profile',
								bullet: 'dot',								
							}
						]
					},
					{
						title: 'Add New Product',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-web',
						submenu: [
							{
								title: 'General',
								page: '/product/general'
							},
							{
								title: 'Prices',
								page: '/product/price'
							},
							{
								title: 'Meta Information',
								page: '/product/metainformation'
							},
							{
								title: 'Images',
								page: '/product/images'
							},
							{
								title: 'Active From',
								page: '/product/activefrom'
							},
							{
								title: 'Inventory',
								page: '/product/inventory'
							},
							{
								title: 'Categories',
								page: '/product/categories'
							},
							{
								title: 'Related Products',
								page: '/product/relatedproduct'
							},
							{
								title: 'Up-Sells',
								page: '/product/upsell'
							},
							{
								title: 'Cross-Sells',
								page: '/product/crossells'
							},
							{
								title: 'Products Reviews',
								page: '/product/reviews'
							}
						]
					},	
				]
			}

		};
	}
}

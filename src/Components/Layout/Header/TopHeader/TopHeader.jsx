import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './topheader.scss';
import logo from '../../../../assets/images/logo.png';
import SpriteIcons from '../../../shared/SpriteIcons/SpriteIcons';
import EntityCount from '../../../shared/EntityCount/EntityCount';
import PriceFullCart from '../../../shared/PriceFullCart/PriceFullCart';

export default function TopHeader() {
	const setActiveLinkCart = ({ isActive }) => ((isActive ? 'active-link ' : '') + ' cart header-icons');
	const setActiveLinkFavorite = ({ isActive }) => ((isActive ? 'active-link ' : '') + ' favorite header-icons');
	const setActiveLinkUser = ({ isActive }) => ((isActive ? 'active-link ' : '') + ' user header-icons');

	return (
		<section className='header-section-top container'>

			{/*//! ======================================== */}
			<div className='header-top__contact-block top-contacts'>
				<div className='top-contacts__container'>
					<div>
						<a className='right-footer__phone by-header' href="tel:88006006191">
							<svg width="16" height="16">
								<SpriteIcons icon="call" />
							</svg>
							&nbsp;
							8 800 600-61-91
						</a>
						<div>
							<ul className='top-contacts__socials list-socials'>
								<li className='list-socials__item'>
									<Link className='list-socials__link hover' to='/'>Viber</Link>
								</li>
								<li className='list-socials__item'>
									<Link className='list-socials__link hover' to='/'>Whats App</Link>
								</li>
								<li className='list-socials__item'>
									<Link className='list-socials__link hover' to='/'>Telegram</Link>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<a className='right-footer__email by-header' href="mailto:mr.driskell@gmail.com">
							<svg width="18" height="13">
								<SpriteIcons icon="mail" />
							</svg>
							&nbsp;
							Mr.Driskell@gmail.com
						</a>
					</div>
				</div>

			</div>

			{/*//! ======================================== */}
			<div className='header-top__logo-block'>
				<Link className='footer-logo__logo-link' to='/'>
					<img className='footer-logo__logo-img' src={logo} alt="logo" />
				</Link>
			</div>
			{/*//! ======================================== */}
			<div className='header-top__cart-block'>
				<div>

					<PriceFullCart
						price={'37 280'}
					/>
					<NavLink className={setActiveLinkCart} to='/cart'>
						<svg width="20" height="20"  >
							<SpriteIcons icon="cart" />
						</svg>
						<EntityCount
							entity={'17'}
						/>
					</NavLink>
					<NavLink className={setActiveLinkFavorite} to='/favorite'>
						<svg width="20" height="18"  >
							<SpriteIcons icon="favorite" />
						</svg>
						<EntityCount
							entity={'1'}
						/>
					</NavLink>
					<NavLink className={setActiveLinkUser} to='/profile'>
						<svg width="19" height="19"  >
							<SpriteIcons icon="user" />
						</svg>
					</NavLink>
				</div>

			</div>
		</section>
	)
}

import React, { useState } from "react";
import App from "../App";
// import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: "icons/grid.svg",
		},
		{
			text: "Courses",
			icon: "icons/user.svg",
		},
		{
			text: "Trending",
			icon: "icons/message.svg",
		},
		{
			text: "Following",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "Dashboard",
			icon: "icons/folder.svg",
		},
		{
			text: "Discord",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div className={isExpanded?"col-2":"col-1"}>
            <div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
                <button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button><br/>
					
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
		</div>
        </div>
	);
};

export default SideNavBar;
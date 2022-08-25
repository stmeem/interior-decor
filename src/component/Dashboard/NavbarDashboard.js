import React from "react";


export const NavbarDashboard =()=>{
    return(
        <nav
      class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
      id="sidenavAccordion"
    >
     
      <button
        class="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
        id="sidebarToggle"
      >
        <i data-feather="menu"></i>
      </button>
      
      <a class="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">Dashboard</a>
     
      <ul class="navbar-nav align-items-center ms-auto">
        
        <li class="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <a
            class="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownUserImage"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><img
              class="img-fluid"
              src="assets/img/illustrations/profiles/profile-1.png"
          /></a>
          <div
            class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownUserImage"
          >
            <h6 class="dropdown-header d-flex align-items-center">
              <img
                class="dropdown-user-img"
                src="assets/img/illustrations/profiles/profile-1.png"
              />
              <div class="dropdown-user-details">
                <div class="dropdown-user-details-name">Valerie Luna</div>
                <div class="dropdown-user-details-email">vluna@aol.com</div>
              </div>
            </h6>
         
          </div>
        </li>
      </ul>
    </nav>
    )
}
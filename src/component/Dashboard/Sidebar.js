import React from "react";

export const Sidebar = () => {
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-light">
          <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
            <div class="sidenav-menu-heading d-sm-none">Account</div>
            <div class="sidenav-menu-heading">Core</div>
              <a
                class="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#collapseDashboards"
                aria-expanded="false"
                aria-controls="collapseDashboards"
              >
                <div class="nav-link-icon"><i data-feather="activity"></i></div>
                Dashboards
                <div class="sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

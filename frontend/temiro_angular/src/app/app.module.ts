import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { ComunModule }         from './comun/comun.module';
import { DashboardModule }     from './dashboard/dashboard.module';
import { DashboardAdminModule } from './dashboardadmin/dashboardadmin.module';
import { HomeModule }          from './home/home.module';
import { RouterModule }        from '@angular/router';

import { IndiceAdmComponent }  from './dashboardadmin/indice-adm/indice-adm.component'; // Importa tu componente aquí


@NgModule({
  declarations: [
    AppComponent,
    IndiceAdmComponent  // Asegúrate de incluir todos los componentes que necesites usar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComunModule,
    DashboardModule,
    HomeModule,
    DashboardAdminModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

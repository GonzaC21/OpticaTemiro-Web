import { CUSTOM_ELEMENTS_SCHEMA, NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes }        from '@angular/router';

import { CarrocomprasComponent }  from './pages/carrocompras/carrocompras.component';
import { MisComprasComponent }    from './pages/mis-compras/mis-compras.component';
import { IndiceComponent }        from './pages/indice/indice.component';
import { ProductoComponent }      from './pages/productos/producto/producto.component';
import { ComprarComponent }       from './pages/productos/comprar/comprar.component';
import { PerfilComponent }        from './pages/perfil/perfil.component';
import { ProductosComponent }     from './pages/productos/productos.component';
import { DetallesComponent }      from './pages/productos/detalles/detalles.component';
import { FormularioConsultaComponent } from './pages/servicios/FormuConsultas/formulario-consulta.component';
import { PagesComponent } from './pages/pages.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


const routes: Routes =[
  {
    path: 'pages', component: PagesComponent,
    children: [
      {path: 'carrito', component: CarrocomprasComponent},
      {path: 'indice', component: IndiceComponent},
      {path: 'productos', component: ProductosComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'detalle/:idproducto', component: DetallesComponent},
      {path: 'comprar/:precio', component: ComprarComponent},
      {path: 'servicios', component: ServiciosComponent},
      {path: 'formulario-consulta', component: FormularioConsultaComponent },
    ]
  }
]

@NgModule({
  declarations: [
    IndiceComponent,
    ProductoComponent,
    ProductosComponent,
    DetallesComponent,
    CarrocomprasComponent,
    MisComprasComponent,
    ComprarComponent,
    PerfilComponent,
    FormularioConsultaComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {

}

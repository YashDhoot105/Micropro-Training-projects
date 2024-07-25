import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GetalluserdataComponent } from "./Components/getalluserdata/getalluserdata.component";

export const routes: Routes = [
    { path: '', redirectTo: 'getuser', pathMatch: 'full' },
    {path:'getuser' , component:GetalluserdataComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

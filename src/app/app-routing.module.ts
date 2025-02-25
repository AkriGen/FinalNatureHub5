import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ProductComponent } from './product/product.component';
import { RemediesComponent } from './remedies/remedies.component';
import { HelthtipsComponent } from './helthtips/helthtips.component';
import { UserComponent } from './Auth/user/user.component';
import { AddressComponent } from './address/address.component';
import { SkinComponent } from './category/skin/skin.component';
import { BodyComponent } from './category/body/body.component';
import { HairComponent } from './category/hair/hair.component';
import { ImmunityComponent } from './category/immunity/immunity.component';
import { DigestionComponent } from './category/digestion/digestion.component';
import { AuthGuard } from './auth.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';
import { AdminRemediesComponent } from './admin/admin-remedies/admin-remedies.component';
import { AdminRemedyFormComponent } from './admin/admin-remedy-form/admin-remedy-form.component';
import { AdminHealthTipsComponent } from './admin/admin-health-tips/admin-health-tips.component';
import { AdminUserDetailsComponent } from './admin/admin-user-details/admin-user-details.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminHealthTipFormComponent } from './admin/admin-health-tip-form/admin-health-tip-form.component';
import { UserloginComponent } from './auth/userlogin/userlogin.component';
import { DashboardComponent } from './Auth/dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminPaymentComponent } from './admin/admin-payment/admin-payment.component';
import { UserpaymentComponent } from './userpayment/userpayment.component';


const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'bookmark',component:BookmarkComponent,canActivate: [AuthGuard] ,data:{role:'user'}},
  {path:'cart',component:CartComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'payment',component:PaymentComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'privacy',component:PrivacypolicyComponent},
  {path:'product',component:ProductComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'remedies',component:RemediesComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'healthtips',component:HelthtipsComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'admin-health-tip-form',component:AdminHealthTipFormComponent,canActivate: [AuthGuard],data:{role:'admin'}},
  {path:'user',component:UserComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'address',component:AddressComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'skin',component:SkinComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'body',component:BodyComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'hair',component:HairComponent,canActivate: [AuthGuard],data:{role:'user'}}, 
  {path:'immunity',component:ImmunityComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'digestion',component:DigestionComponent,canActivate: [AuthGuard],data:{role:'user'}},
  { path: 'admin-panel', component: AdminPanelComponent ,canActivate: [AuthGuard], data: { role: 'admin' }  },  // Specify role if needed (e.g., admin)},
  { path: 'admin-product', component: AdminProductComponent,canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin-product-form', component: AdminProductFormComponent,canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin-remedies', component: AdminRemediesComponent,canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin-remedies-form', component:AdminRemedyFormComponent,canActivate: [AuthGuard],data:{role:'admin'}},  
  { path: 'admin-health-tips', component: AdminHealthTipsComponent ,canActivate: [AuthGuard], data: { role: 'admin' }},
  { path: 'admin-user-details', component: AdminUserDetailsComponent ,canActivate: [AuthGuard], data: { role: 'admin' }},
  { path: 'admin-profile', component: AdminProfileComponent,canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard],data:{role:'user'}},
  {path:'address',component:AddressComponent,canActivate:[AuthGuard],data:{role:'user'}},
  {path:'admin-pay',component:AdminPaymentComponent,canActivate:[AuthGuard],data:{role:'admin'}} ,
  {path:'user-pay',component:UserpaymentComponent,canActivate:[AuthGuard],data:{role:'user'}},
  { path: '**', component: ErrorPageComponent },

 
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

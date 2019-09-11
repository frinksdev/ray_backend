alter table coupon_service drop foreign key coupon_service_ibfk_2;

alter table coupon_service
	add constraint coupon_service_ibfk_2
		foreign key (service_id) references service (id)
			on delete cascade;

alter table service drop foreign key service_ibfk_1;

alter table service
	add constraint service_ibfk_1
		foreign key (service_category_id) references service_category (id)
			on delete cascade;

alter table driver_service drop foreign key driver_service_ibfk_2;

alter table driver_service
	add constraint driver_service_ibfk_2
		foreign key (service_id) references service (id)
			on delete cascade;



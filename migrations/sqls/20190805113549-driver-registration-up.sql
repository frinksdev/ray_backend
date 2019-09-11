alter table driver modify status enum('offline', 'online', 'in service', 'disabled', 'enabled', 'blocked', 'waiting documents', 'pending approval', 'soft reject', 'hard reject') default 'waiting documents' not null;
UPDATE driver set status = 'pending approval' where status = 'disabled';
UPDATE driver set status = 'offline' where status = 'enabled';
alter table driver modify status enum('offline', 'online', 'in service', 'blocked', 'pending approval', 'waiting documents', 'soft reject', 'hard reject') default 'waiting documents' not null;

alter table driver add documents_note varchar(500) null;

create table driver_document(
    id int primary key auto_increment,
    driver_id int,
    media_id int,
    foreign key (driver_id) references driver(id),
    foreign key (media_id) references media(id)
);

CREATE TABLE region(
    id int primary key auto_increment,
    name varchar(100),
    enabled boolean default true,
    location polygon
);

CREATE TABLE service_region (
    id int primary key auto_increment,
    service_id int,
    region_id int,
    FOREIGN KEY (service_id) references service(id),
    FOREIGN KEY (region_id) references region(id)
);

alter table service add keep_estimated_fee boolean default true not null;
alter table service add should_estimate_fee boolean default true not null;
alter table service add can_use_confirmation_code boolean default false not null;
alter table service add provider_share_percent tinyint default 0 not null;
alter table service add provider_share_flat float(10,2) default 0.00 not null;

alter table media modify type enum('car', 'service', 'driver image', 'driver header', 'operator image', 'rider image', 'promotion', 'driver document') null;

alter table travel add confirmation_code int default null;
ALTER TABLE travel add service_id int;
ALTER TABLE travel add foreign key (service_id) references service(id);

alter table driver_service drop foreign key driver_service_ibfk_1;

alter table driver_service
	add constraint driver_service_ibfk_1
		foreign key (driver_id) references driver (id)
			on delete cascade;


alter table driver_transaction drop foreign key driver_transaction_ibfk_1;

alter table driver_transaction
	add constraint driver_transaction_ibfk_1
		foreign key (driver_id) references driver (id)
			on delete cascade;

alter table payment_request drop foreign key payment_request_ibfk_1;

alter table payment_request
	add constraint payment_request_ibfk_1
		foreign key (driver_id) references driver (id)
			on delete cascade;

alter table travel_review drop foreign key travel_review_ibfk_2;

alter table travel_review
	add constraint travel_review_ibfk_2
		foreign key (driver_id) references driver (id)
			on delete cascade;

DELETE t1 FROM driver t1 INNER JOIN driver t2  WHERE t1.id < t2.id AND t1.mobile_number = t2.mobile_number;

DELETE FROM driver WHERE mobile_number IS NULL;
create unique index driver_mobile_number_uindex on driver (mobile_number);

DELETE t1 FROM rider t1 INNER JOIN rider t2  WHERE t1.id < t2.id AND t1.mobile_number = t2.mobile_number;

DELETE FROM rider WHERE mobile_number IS NULL;
create unique index rider_mobile_number_uindex on rider (mobile_number);

UPDATE travel set status = 'driver accepted' WHERE status = 'rider accepted';
alter table travel modify status enum('requested', 'not found', 'no close found', 'found', 'driver accepted', 'driver canceled', 'rider canceled', 'travel started', 'travel finished credit', 'travel finished cash', 'booked', 'expired') default 'requested' null;

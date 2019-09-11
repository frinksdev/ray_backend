alter table travel add expected_timestamp timestamp null after rating;

alter table travel add operator_id int null;

alter table travel modify status enum('requested', 'not found', 'no close found', 'found', 'driver accepted', 'rider accepted', 'driver canceled', 'rider canceled', 'travel started', 'travel finished credit', 'travel finished cash', 'booked') default 'requested' null;
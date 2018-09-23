package com.pailsom.model;

public class Property {

	private int Id;
	private String name;
	private String order;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOrder() {
		return order;
	}
	@Override
	public String toString() {
		return "Property [Id=" + Id + ", name=" + name + ", order=" + order + "]";
	}
	public void setOrder(String order) {
		this.order = order;
	}
	
	
}
